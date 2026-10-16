/**
 * ============================================================================
 * 🛡️ OPTIFILE • UTILITYHUB — MASTER CONTROL & SECURITY SHIELD (v2026.2 FINAL)
 * ============================================================================
 * [EDITABLE SETTINGS FOR OWNER]
 * 1. SHOW_ADS: Abhi false hai (saare Ad boxes & Video Ad Gate छुपे rahenge).
 *              Jab AdSense approve ho jaye, bas isko true kar dena!
 * 2. ADSENSE_CLIENT_ID: Jab Google AdSense mil jaye, apna ID (e.g. "ca-pub-1234567890")
 *              yahan daal dena — saare 7 pages par Auto-Ads khud lag jayenge!
 * 3. DOMAIN_LOCK: true rehne par sirf optifile.online (+ local testing) par chalega.
 * 4. HIGH_SECURITY: true rehne par Right-Click, F12, Ctrl+U, Ctrl+S sab lock rahenge.
 * ============================================================================
 */
window.OPTIFILE_CONFIG = {
    SHOW_ADS: false,                 // <-- AdSense milne ke baad isko true kar dena
    ADSENSE_CLIENT_ID: "",           // <-- Future me apna "ca-pub-XXXXXXXXXXXX" yahan daalna
    DOMAIN_LOCK: true,               // <-- Domain Lock Active (optifile.online)
    HIGH_SECURITY: true,             // <-- F12, Right-Click, Ctrl+U, Ctrl+S Lock Active
    ALLOWED_DOMAINS: [
        "optifile.online",
        "www.optifile.online",
        "localhost",
        "127.0.0.1",
        ""
    ],
    ALLOW_VERCEL_PREVIEW: true
};

/* ============================================================================
   🔒 OBFUSCATED CORE ENGINE (DOMAIN LOCK + ANTI-INSPECT + AD & NAV MANAGER)
   ============================================================================ */
(function(_0x1a2b){
    var _0x3c4d=["\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x70\x72\x6F\x74\x6F\x63\x6F\x6C","\x66\x69\x6C\x65\x3A","\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74","\x31\x32\x37\x2E\x30\x2E\x30\x2E\x31","\x2E\x76\x65\x72\x63\x65\x6C\x2E\x61\x70\x70","\x65\x6E\x64\x73\x57\x69\x74\x68","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x44\x4F\x4D\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x6F\x61\x64\x65\x64","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75","\x49\x4E\x50\x55\x54","\x54\x45\x58\x54\x41\x52\x45\x41","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x6B\x65\x79\x64\x6F\x77\x6E","\x46\x31\x32"];
    var _0xhost=(window[_0x3c4d[1]][_0x3c4d[0]]||"")[_0x3c4d[2]]();
    var _0xproto=window[_0x3c4d[1]][_0x3c4d[3]]||"";

    if(_0x1a2b.HIGH_SECURITY&&window.top!==window.self){
        try{window.top.location=window.self.location;}catch(_0xe){document.documentElement.innerHTML="";}
    }

    if(_0x1a2b.DOMAIN_LOCK){
        var _0xisLocal=(_0xproto===_0x3c4d[4]||_0xhost===_0x3c4d[5]||_0xhost===_0x3c4d[6]||_0xhost==="");
        var _0xisAllowed=_0x1a2b.ALLOWED_DOMAINS[_0x3c4d[9]](_0xhost)||(_0x1a2b.ALLOW_VERCEL_PREVIEW&&_0xhost[_0x3c4d[8]](_0x3c4d[7]))||_0xisLocal;
        if(!_0xisAllowed){
            window[_0x3c4d[11]](_0x3c4d[10],function(){
                document.body.innerHTML='<div style="height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0F172A;color:#FFF;font-family:sans-serif;text-align:center;padding:24px;"><div style="font-size:54px;margin-bottom:12px;">🛡️</div><h1 style="font-size:24px;font-weight:800;margin-bottom:8px;color:#38BDF8;">Unauthorized Domain Detected</h1><p style="font-size:14px;color:#94A3B8;max-width:460px;line-height:1.6;margin-bottom:20px;">This software is protected under DMCA & Copyright Law and licensed exclusively to <strong>optifile.online</strong>.</p><a href="https://optifile.online" style="background:#0284C7;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">Go to Official OptiFile.online →</a></div>';
            });
            throw new Error("OptiFile Domain Lock Active.");
        }
    }

    if(_0x1a2b.HIGH_SECURITY){
        var _0xs=document.createElement("style");
        _0xs.innerHTML="body,header,nav,.card,.pdf-card,.panel,.tool-panel{-webkit-user-select:none;-moz-user-select:none;user-select:none;}input,textarea,[contenteditable='true'],#result-content,#keywordList{-webkit-user-select:text!important;-moz-user-select:text!important;user-select:text!important;}img{-webkit-user-drag:none;user-drag:none;}";
        document.head.appendChild(_0xs);

        window[_0x3c4d[11]](_0x3c4d[12],function(_0xe){
            var _0xt=(_0xe.target&&_0xe.target.tagName)?_0xe.target.tagName.toUpperCase():"";
            if(_0xt!==_0x3c4d[13]&&_0xt!==_0x3c4d[14]){
                _0xe[_0x3c4d[15]]();
                _0xe[_0x3c4d[16]]();
                return false;
            }
        },true);

        window[_0x3c4d[11]](_0x3c4d[17],function(_0xe){
            var _0xk=(_0xe.key||"").toUpperCase();
            var _0xblock=(_0xe.key===_0x3c4d[18]||_0xe.keyCode===123||(_0xe.ctrlKey&&_0xe.shiftKey&&(_0xk==="I"||_0xk==="J"||_0xk==="C"||_0xk==="K"))||(_0xe.metaKey&&_0xe.altKey&&(_0xk==="I"||_0xk==="J"||_0xk==="C"||_0xk==="U"))||(_0xe.ctrlKey&&(_0xk==="U"||_0xk==="S")));
            if(_0xblock){
                _0xe[_0x3c4d[15]]();
                _0xe[_0x3c4d[16]]();
                return false;
            }
        },true);
    }

    if(!_0x1a2b.SHOW_ADS){
        var _0xas=document.createElement("style");
        _0xas.innerHTML=".ad-spot,.ad-spot-1,.ad-spot-4,.ad-spot-top,.ad-spot-bottom,#videoAdModal,.ad-gate-tag{display:none!important;}";
        document.head.appendChild(_0xas);
    }else if(_0x1a2b.ADSENSE_CLIENT_ID&&_0x1a2b.ADSENSE_CLIENT_ID.startsWith("ca-pub-")){
        var _0xads=document.createElement("script");
        _0xads.async=true;
        _0xads.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+_0x1a2b.ADSENSE_CLIENT_ID;
        _0xads.crossOrigin="anonymous";
        document.head.appendChild(_0xads);
    }

    window[_0x3c4d[11]](_0x3c4d[10],function(){
        if(!_0x1a2b.SHOW_ADS){
            document.querySelectorAll("div").forEach(function(_0xd){
                if(_0xd.children.length===0&&/AdSense\s+(Leaderboard|Spot)/i.test(_0xd.textContent||"")){
                    _0xd.style.setProperty("display","none","important");
                }
            });
            if(typeof window.openRewardedVideoAdGate==="function"){
                window.openRewardedVideoAdGate=function(_0xst){
                    if(_0xst==="exam"&&typeof examProcessedOutputs!=="undefined"){
                        currentAdDownloadQueue=examProcessedOutputs.map(function(_0xit){return{blobUrl:_0xit.blobUrl,fileName:_0xit.fileName};});
                    }else if(_0xst==="bulk_kb"&&typeof latestBulkKBOutputs!=="undefined"){
                        currentAdDownloadQueue=latestBulkKBOutputs.map(function(_0xit){return{blobUrl:_0xit.blobUrl,fileName:"optifile-"+_0xit.name};});
                    }
                    if(typeof executeQueueMultiDownload==="function"){executeQueueMultiDownload();}
                };
            }
            document.querySelectorAll(".btn-download-all-direct span").forEach(function(_0xsp){
                if(_0xsp.textContent.includes("Watch Short Ad")){
                    _0xsp.textContent="⬇ Download All Files Together (1-Click)";
                }
            });
        }

        // Sub-page navigation & auth links auto-connector
        document.querySelectorAll("a.pill-kb").forEach(function(_0xa){
            if(_0xa.getAttribute("href")==="index.html"){
                _0xa.setAttribute("href","index.html?tool=kb");
            }
        });

        var _0xparams=new URLSearchParams(window.location.search);
        if(_0xparams.get("tool")==="kb"&&typeof window.openTool==="function"){window.openTool("kb");}
        if(_0xparams.get("auth")&&typeof window.openAuthModal==="function"){window.openAuthModal(_0xparams.get("auth"));}

        var _0xraw=localStorage.getItem("optifile_user");
        var _0xusr=null;
        try{if(_0xraw)_0xusr=JSON.parse(_0xraw);}catch(_0xe){}

        document.querySelectorAll("button").forEach(function(_0xb){
            var _0xt=(_0xb.textContent||"").trim().toLowerCase();
            if(!_0xb.getAttribute("onclick")){
                if(_0xt==="sign in"){_0xb.onclick=function(){window.location.href="index.html?auth=signin";};}
                else if(_0xt==="sign up"){_0xb.onclick=function(){window.location.href="index.html?auth=signup";};}
            }
        });

        if(_0xusr&&_0xusr.name&&!document.getElementById("userProfilePill")){
            var _0xrh=document.querySelector(".header-right")||document.querySelector("header .flex.items-center.space-x-3");
            if(_0xrh){
                _0xrh.innerHTML='<div style="display:flex;align-items:center;gap:8px;background:#F8FAFC;border:1.5px solid #CBD5E1;padding:5px 12px 5px 6px;border-radius:50px;"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#0284C7,#0D9488);color:#fff;font-weight:800;font-size:12px;display:flex;align-items:center;justify-content:center;">'+_0xusr.name.charAt(0).toUpperCase()+'</div><span style="font-size:12.5px;font-weight:700;color:#0F172A;">'+_0xusr.name+'</span></div>';
            }
        }
    });
})(window.OPTIFILE_CONFIG);