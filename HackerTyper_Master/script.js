// (c) 2019 Dave Ingham
// This code is licensed under CCL license (see LICENSE.txt for details)

$(
    function () {
        // This code adds an event listener to the 'keydown' event.
        // Keydown will continue to fire if a key is kept pressed
        // You could use 'keyup' if you only wanted the function to execute when a key is released (and therfore not repeat)
        $(document).keydown(
            function (event) {
                Typer.addText(event); //Capture the keydown event and call the addText, this is executed on page load
            }
        );
    }
);

var Typer = {
    text: null,
    accessCountimer: null,
    index: 0, // current cursor position
    speed: 2, // speed of the Typer
    file: "", //file, must be setted
    accessCount: 0, //times alt is pressed for Access Granted
    deniedCount: 0, //times # is pressed for Access Denied
    mobscanCount: 0, //times 1 is pressed for Scan for Mobile Device
    mobhackCount:0, //times 2 is pressed for Mobile Hack
    mobcopyCount:0, //times 3 is pressed for Mobile Copy
    firescanCount:0, //times 4 is pressed for Firewall Scan
    firebypassCount:0, //times 5 is pressed for Firewall Bypassed
    firedisableCount:0, //times 6 is pressed for Firewall Disabled
    avscanCount:0, //times 7 is pressed for Antivirus Scan
    avbypassCount:0, //times 8 is pressed for Antivirus Bypass
    avdisableCount:0, //times 9 is pressed for Antivirus Disable
    uploadCount:0, //times [ is pressed for Uploading
    downloadCount:0, //times ] is pressed for Downloading
    cellscanCount:0, //times - is pressed for Cell Tower Scan
    cellbreachCount:0, //times = is pressed for Cell Tower Breach
    cctvscanCount:0, //times insert is pressed for CCTV Scan
    cctvloopCount:0, //times home is pressed for CCTV Loop Enabled 
    malwareCount:0, //times ; is pressed for Malware Running 
    keylogCount:0, //times . is pressed for Keylogger Deployed
    mobpairCount:0, //times / is pressed for Mobile Force Pair
    counterCount:0, //times shift is pressed for Counter Measures Running
    virusdetCount:0, //times ctrl is pressed for VIRUS DETECTED!
    runCount:0, //times tab is pressed for RUNNING
    compilingCount:0, //times pg up is pressed for COMPILING
    cloningCount:0, //times pg dn is pressed for CLONING
    scanCount:0, //times end is pressed for Scanning
    netscanCount:0, //times delete is pressed for Network Scan
    netlocCount:0, //times 0 is pressed for Network Located
    moblocCount:0, //times pause is pressed for Mobile device located
    alarmdisCount:0, //times 0 is pressed for Alarm Disabled 

// NAME[lowercase]Count: 0, //times GIVEN KEY is pressed for OUTPUT EFFECT 

    init: function () { // inizialize Hacker Typer
        accessCountimer = setInterval(function () {
            Typer.updLstChr();
        }, 500); // inizialize timer for blinking cursor
        $.get(Typer.file, function (data) { // get the text file
            Typer.text = data; // save the textfile in Typer.text
        });
    },

    content: function () {
        return $("#console").html(); // get console content
    },

    write: function (str) { // append to console content
        $("#console").append(str);
        return false;
    },

makeAccess: function () { //create Access Granted popUp
        Typer.hidepop(); // hide all popups
        Typer.accessCount = 0; //reset count
        var ddiv = $("<div id='gran'>").html(""); // create new blank div and id "gran"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>ACCESS GRANTED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeDenied: function () { //create Access Denied popUp
        Typer.hidepop(); // hide all popups
        Typer.deniedCount = 0; //reset count
        var ddiv = $("<div id='deni'>").html(""); // create new blank div and id "deni"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>ACCESS DENIED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeMobscan: function () { //create Scanning for Mobile device popUp
        Typer.hidepop(); // hide all popups
        Typer.mobscanCount = 0; //reset count
        var ddiv = $("<div id='mosc'>").html(""); // create new blank div and id "mosc"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>SCANNING FOR MOBILE DEVICE</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeMobhack: function () { //create Hacking Mobile Device popUp
        Typer.hidepop(); // hide all popups
        Typer.mobhackCount = 0; //reset count
        var ddiv = $("<div id='moha'>").html(""); // create new blank div and id "moha"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>HACKING MOBILE DEVICE</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeMobcopy: function () { // make Copy Mobile Device popup
        Typer.hidepop(); // hide all popups
        Typer.mobcopyCount = 0; //reset count
        var ddiv = $("<div id='moco'>").html(""); // create new blank div and id "moco"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>COPYING MOBILE DEVICE</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeFirescan: function () { //create Scanning Firewall popUp
        Typer.hidepop(); // hide all popups
        Typer.firescanCount = 0; //reset count
        var ddiv = $("<div id='fisc'>").html(""); // create new blank div and id "fisc"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>SCANNING FIREWALL</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },    
makeFirebypass: function () { //create Bypassing Firewall popUp
        Typer.hidepop(); // hide all popups
        Typer.firebypassCount = 0; //reset count
        var ddiv = $("<div id='fiby'>").html(""); // create new blank div and id "fiby"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>BYPASSING FIREWALL</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },    
makeFiredisable: function () { //create Disabling Firewall popUp
        Typer.hidepop(); // hide all popups
        Typer.firedisableCount = 0; //reset count
        var ddiv = $("<div id='fidi'>").html(""); // create new blank div and id "fidi"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>DISABLING FIREWALL</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAvscan: function () { //create Scanning Antivirus popUp
        Typer.hidepop(); // hide all popups
        Typer.avscanCount = 0; //reset count
        var ddiv = $("<div id='avsc'>").html(""); // create new blank div and id "avsc"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>SCANNING ANTIVIRUS</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAvbypass: function () { //create Bypassing Antivirus popUp
        Typer.hidepop(); // hide all popups
        Typer.avbypassCount = 0; //reset count
        var ddiv = $("<div id='avby'>").html(""); // create new blank div and id "avby"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>BYPASSING ANTIVIRUS</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAvdisable: function () { //create Disable Antivirus popUp
        Typer.hidepop(); // hide all popups
        Typer.avdisableCount = 0; //reset count
        var ddiv = $("<div id='avdi'>").html(""); // create new blank div and id "avdi"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>DISABLING ANTIVIRUS</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeUpload: function () { //create Uploading popUp
        Typer.hidepop(); // hide all popups
        Typer.uploadCount = 0; //reset count
        var ddiv = $("<div id='uplo'>").html(""); // create new blank div and id "uplo"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>UPLOADING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeDownload: function () { //create Downloading popUp
        Typer.hidepop(); // hide all popups
        Typer.downloadCount = 0; //reset count
        var ddiv = $("<div id='dolo'>").html(""); // create new blank div and id "dolo"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>DOWNLOADING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeCellscan: function () { //create Cell Tower Scan popUp
        Typer.hidepop(); // hide all popups
        Typer.cellscanCount = 0; //reset count
        var ddiv = $("<div id='cesc'>").html(""); // create new blank div and id "cesc"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>SCANNING CELL TOWER</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeCellbreach: function () { //create Cell Tower Breach popUp
        Typer.hidepop(); // hide all popups
        Typer.cellbreachCount = 0; //reset count
        var ddiv = $("<div id='cebr'>").html(""); // create new blank div and id "cebr"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>BREACHING CELL TOWER</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeMalware: function () { //create Malware Running popUp
        Typer.hidepop(); // hide all popups
        Typer.malwareCount = 0; //reset count
        var ddiv = $("<div id='malw'>").html(""); // create new blank div and id "malw"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>MALWARE RUNNING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeCctvscan: function () { //create CCTV Scan popUp
        Typer.hidepop(); // hide all popups
        Typer.cctvscanCount = 0; //reset count
        var ddiv = $("<div id='ccsc'>").html(""); // create new blank div and id "ccsc"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>SCANNING CCTV</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeCctvloop: function () { //create CCTV Loop Enabled popUp
        Typer.hidepop(); // hide all popups
        Typer.cctvloopCount = 0; //reset count
        var ddiv = $("<div id='cclo'>").html(""); // create new blank div and id "cclo"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>CCTV LOOP ENABLED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeKeylog: function () { //create Keylogger Deployed popUp
        Typer.hidepop(); // hide all popups
        Typer.keylogCount = 0; //reset count
        var ddiv = $("<div id='keyl'>").html(""); // create new blank div and id "keyl"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>KEYLOGGER DEPLOYED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeMobpair: function () { //create Mobile Force Pair popUp
        Typer.hidepop(); // hide all popups
        Typer.mobpairCount = 0; //reset count
        var ddiv = $("<div id='mopa'>").html(""); // create new blank div and id "mopa"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>MOBILE FORCE PAIR</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeCounter: function () { //create Counter Measures Running popUp
        Typer.hidepop(); // hide all popups
        Typer.counterCount = 0; //reset count
        var ddiv = $("<div id='coun'>").html(""); // create new blank div and id "coun"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>COUNTER MEASURES RUNNING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeVirusdet: function () { //create Virus Detected popUp
        Typer.hidepop(); // hide all popups
        Typer.virusdetCount = 0; //reset count
        var ddiv = $("<div id='viru'>").html(""); // create new blank div and id "viru"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>VIRUS DETECTED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeRun: function () { //create RUNNING popUp
        Typer.hidepop(); // hide all popups
        Typer.runCount = 0; //reset count
        var ddiv = $("<div id='runn'>").html(""); // create new blank div and id "runn"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>RUNNING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeCompiling: function () { //create Compiling popUp
        Typer.hidepop(); // hide all popups
        Typer.compilingCount = 0; //reset count
        var ddiv = $("<div id='comp'>").html(""); // create new blank div and id "comp"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>COMPILING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeCloning: function () { //create Cloning popUp
        Typer.hidepop(); // hide all popups
        Typer.cloningCount = 0; //reset count
        var ddiv = $("<div id='clon'>").html(""); // create new blank div and id "clon"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>CLONING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeScan: function () { //create Scanning popUp
        Typer.hidepop(); // hide all popups
        Typer.scanCount = 0; //reset count
        var ddiv = $("<div id='scan'>").html(""); // create new blank div and id "scan"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>SCANNING</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeNetscan: function () { //create Scan for Network popUp
        Typer.hidepop(); // hide all popups
        Typer.netscanCount = 0; //reset count
        var ddiv = $("<div id='nesc'>").html(""); // create new blank div and id "nesc"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>SCANNING FOR NETWORK</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeNetloc: function () { //create Network Located!
        Typer.hidepop(); // hide all popups
        Typer.netlocCount = 0; //reset count
        var ddiv = $("<div id='nelo'>").html(""); // create new blank div and id "nelo"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>NETWORK LOCATED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeMobloc: function () { //create Mobile Located!
        Typer.hidepop(); // hide all popups
        Typer.moblocCount = 0; //reset count
        var ddiv = $("<div id='molo'>").html(""); // create new blank div and id "molo"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>MOBILE DEVICE LOCATED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAlarmdis: function () { //create Alarm Disabled
        Typer.hidepop(); // hide all popups
        Typer.alarmdisCount = 0; //reset count
        var ddiv = $("<div id='aldi'>").html(""); // create new blank div and id "aldi"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>ALARM DISABLED</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
// makeNAME[Sentence case]: function () { //create Access Granted popUp
//Typer.hidepop(); // hide all popups
//Typer.NAME[lowercase] = 0; //reset count
//var ddiv = $("<div id='FOUR CHAR STRING'>").html(""); // create new blank div and id "FOUR CHAR STRING"
//ddiv.addClass("FROM CSS SHEET"); // add class to the div
//ddiv.html("<h1>WORDS IN THE BOX</h1>"); // set content of div
//$(document.body).prepend(ddiv); // prepend div to body
//return false;
//},


    hidepop: function () { // remove all existing popups
        $("#deni").remove();
        $("#gran").remove();
        $("#mosc").remove();
        $("#moha").remove();
        $("#moco").remove();
        $("#fisc").remove();
        $("#fiby").remove();
        $("#fidi").remove();
        $("#avsc").remove();
        $("#avby").remove();
        $("#avdi").remove();
        $("#uplo").remove();
        $("#dolo").remove();
        $("#cesc").remove();
        $("#cebr").remove();
        $("#ccsc").remove();
        $("#cclo").remove();
        $("#malw").remove();
        $("#keyl").remove();
        $("#mopa").remove();
        $("#coun").remove();
        $("#viru").remove();
        $("#runn").remove();
        $("#comp").remove();
        $("#clon").remove();
        $("#scan").remove();
        $("#nesc").remove();
        $("#nelo").remove();
        $("#molo").remove();
        $("#aldi").remove();
// $("#FOUR CHAR STRING").remove();
    },

    addText: function (key) { //Main function to add the code
        // Try this for finding key codes - https://keycode.info/
        if (key.keyCode == 18) { // key 18 = alt key
            Typer.accessCount++; //increase counter
            if (Typer.accessCount >= 3) { // if it's presed 3 times
                Typer.makeAccess(); // make access popup
            }
        } else if (key.keyCode == 222) { // key 222 = #
            Typer.deniedCount++; // increase counter
            if (Typer.deniedCount >= 3) { // if it's pressed 3 times
                Typer.makeDenied(); // make denied popup
            }
        } else if (key.keyCode == 49) { // key 49 = 1
            Typer.mobscanCount++; // increase counter
            if (Typer.mobscanCount >= 3) { // if it's pressed 3 times
                Typer.makeMobscan(); // make Scan Mobile popup
           }
        } else if (key.keyCode == 50) { // key 50 = 2
            Typer.mobhackCount++; // increase counter
            if (Typer.mobhackCount >= 3) { // if it's pressed 3 times
                Typer.makeMobhack (); // make Mobile Hack popup
            }
        } else if (key.keyCode == 51) { // key 51 = 3
            Typer.mobcopyCount++; // increase counter
            if (Typer.mobcopyCount >= 3) { // if it's pressed 3 times
                Typer.makeMobcopy(); // make Copy Mobile Device popup
            }
        } else if (key.keyCode == 52) { // key 52 = 4
            Typer.firescanCount++; // increase counter
            if (Typer.firescanCount >= 3) { // if it's pressed 3 times
                Typer.makeFirescan(); // make Scan Firewall popup
           }
        } else if (key.keyCode == 53) { // key 53 = 5
            Typer.firebypassCount++; // increase counter
            if (Typer.firebypassCount >= 3) { // if it's pressed 3 times
                Typer.makeFirebypass(); // make Bypass Firewall popup
            }
        } else if (key.keyCode == 54) { // key 54 = 6
            Typer.firedisableCount++; // increase counter
            if (Typer.firedisableCount >= 3) { // if it's pressed 3 times
                Typer.makeFiredisable(); // make Disable Firewall popup
            }
        } else if (key.keyCode == 55) { // key 55 = 7
            Typer.avscanCount++; // increase counter
            if (Typer.avscanCount >= 3) { // if it's pressed 3 times
                Typer.makeAvscan(); // make Scan Antivirus popup
           }
        } else if (key.keyCode == 56) { // key 56 = 8
            Typer.avbypassCount++; // increase counter
            if (Typer.avbypassCount >= 3) { // if it's pressed 3 times
                Typer.makeAvbypass(); // make Bypass Antivirus popup
            }
        } else if (key.keyCode == 57) { // key 57 = 9
            Typer.avdisableCount++; // increase counter
            if (Typer.avdisableCount >= 3) { // if it's pressed 3 times
                Typer.makeAvdisable(); // make Disable Antivirus popup
            }
   	} else if (key.keyCode == 219) { // key 219 = [
            Typer.uploadCount++; // increase counter
            if (Typer.uploadCount >= 3) { // if it's pressed 3 times
                Typer.makeUpload(); // make Uploading popup
           }
        } else if (key.keyCode == 221) { // key 221 = ]
            Typer.downloadCount ++; // increase counter
            if (Typer.downloadCount >= 3) { // if it's pressed 3 times
                Typer.makeDownload (); // make Downloading popup
            }
        } else if (key.keyCode == 189) { // key 189 = -
            Typer.cellscanCount++; // increase counter
            if (Typer.cellscanCount >= 3) { // if it's pressed 3 times
                Typer.makeCellscan(); // make Cell Tower Scan popup
            }
        } else if (key.keyCode == 187) { // key 187 = =
            Typer.cellbreachCount++; // increase counter
            if (Typer.cellbreachCount >= 3) { // if it's pressed 3 times
                Typer.makeCellbreach(); // make Cell Tower Breach popup
           }
        } else if (key.keyCode == 186) { // key 186 = ;
            Typer.malwareCount++; // increase counter
            if (Typer.malwareCount >= 3) { // if it's pressed 3 times
                Typer.makeMalware (); // make Malware Running popup
            }
        } else if (key.keyCode == 45) { // key 45 = insert
            Typer.cctvscanCount++; // increase counter
            if (Typer.cctvscanCount >= 3) { // if it's pressed 3 times
                Typer.makeCctvscan(); // make CCTV Scan popup
            }
        } else if (key.keyCode == 36) { // key 36 = home
            Typer.cctvloopCount++; // increase counter
            if (Typer.cctvloopCount >= 3) { // if it's pressed 3 times
                Typer.makeCctvloop(); // make CCTV Loop Enabled popup
           }
        } else if (key.keyCode == 190) { // key 190 = .
            Typer.keylogCount++; // increase counter
            if (Typer.keylogCount >= 3) { // if it's pressed 3 times
                Typer.makeKeylog (); // make Keylogger Deployed popup
            }
	    } else if (key.keyCode == 191) { // key 191 = /
            Typer.mobpairCount++; // increase counter
            if (Typer.mobpairCount >= 3) { // if it's pressed 3 times
                Typer.makeMobpair(); // make Mobile Force Pair popup
           }
        } else if (key.keyCode == 16) { // key 16 = shift
            Typer.counterCount++; // increase counter
            if (Typer.counterCount >= 3) { // if it's pressed 3 times
                Typer.makeCounter(); // make Counter Measures Running popup
            }
        } else if (key.keyCode == 17) { // key 17 = ctrl
            Typer.virusdetCount++; // increase counter
            if (Typer.virusdetCount >= 3) { // if it's pressed 3 times
                Typer.makeVirusdet(); // make Virus Detected
            }
        } else if (key.keyCode == 9) { // key 9 = Tab
            Typer.runCount++; // increase counter
            if (Typer.runCount >= 3) { // if it's pressed 3 times
                Typer.makeRun(); // make Running popup
           }
        } else if (key.keyCode == 33) { // key 33 = page up
            Typer.compilingCount++; // increase counter
            if (Typer.compilingCount >= 3) { // if it's pressed 3 times
                Typer.makeCompiling(); // make Compiling popup
            }
        } else if (key.keyCode == 34) { // key 34 = page down
            Typer.cloningCount++; // increase counter
            if (Typer.cloningCount >= 3) { // if it's pressed 3 times
                Typer.makeCloning(); // make Cloning popup
            }
        } else if (key.keyCode == 35) { // key 35 = end
            Typer.scanCount++; // increase counter
            if (Typer.scanCount >= 3) { // if it's pressed 3 times
                Typer.makeScan(); // make Scanning popup
            }
        } else if (key.keyCode == 46) { // key 46 = delete
            Typer.netscanCount++; // increase counter
            if (Typer.netscanCount >= 3) { // if it's pressed 3 times
                Typer.makeNetscan(); // make Network Scanning popup
            }
        } else if (key.keyCode == 145) { // key 145 = scr lock
            Typer.netlocCount++; // increase counter
            if (Typer.netlocCount >= 3) { // if it's pressed 3 times
                Typer.makeNetloc(); // make Network located popup
            }
        } else if (key.keyCode == 19) { // key 19 = pause
            Typer.moblocCount++; // increase counter
            if (Typer.moblocCount >= 3) { // if it's pressed 3 times
                Typer.makeMobloc(); // make Mobile Device Located popup
            }
        } else if (key.keyCode == 48) { // key 48 = 0
            Typer.alarmdisCount++; // increase counter
            if (Typer.alarmdisCount >= 3) { // if it's pressed 3 times
                Typer.makeAlarmdis(); // make Mobile Device Located popup
            }

// } else if (key.keyCode == Number from Keycode.info) { // key number = corresponding character
//Typer.NAME[lowercase]Count++; // increase counter
//if (Typer.NAME[lowercase]Count >= 3) { // if it's pressed 3 times
//    Typer.makeNAME[Sentence case](); // make denied popup
//}


        } else if (key.keyCode == 27) { // key 27 = esc key
            Typer.hidepop(); // hide all popups
       
        } else if (Typer.text) { // otherway if text is loaded
            var cont = Typer.content(); // get the console content
            if (cont.substring(cont.length - 1, cont.length) == "|") // if the last char is the blinking cursor
                $("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it before adding the text
            if (key.keyCode != 8) { // if key is not backspace
                Typer.index += Typer.speed; // add to the index the speed
            } else {
                if (Typer.index > 0) // else if index is not less than 0
                    Typer.index -= Typer.speed; //	remove speed for deleting text
            }
            var text = $("<div/>").text(Typer.text.substring(0, Typer.index)).html(); // parse the text for stripping html enities
            var rtn = new RegExp("\n", "g"); // newline regex
            var rts = new RegExp("\\s", "g"); // whitespace regex
            var rtt = new RegExp("\\t", "g"); // tab regex
            $("#console").html(text.replace(rtn, "<br/>").replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(rts, "&nbsp;")); // replace newline chars with br, tabs with 4 space and blanks with an html blank
            window.scrollBy(0, 50); // scroll to make sure bottom is always visible
        }
        if (key.preventDefault && key.keyCode != 122) { // prevent F11(fullscreen) from being blocked
            key.preventDefault()
        };
        if (key.keyCode != 122) { // otherway prevent keys default behavior
            key.returnValue = false;
        }
    },

    updLstChr: function () { // blinking cursor
        var cont = this.content(); // get console
        if (cont.substring(cont.length - 1, cont.length) == "|") // if last char is the cursor
            $("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it
        else
            this.write("|"); // else write it
    }
}
