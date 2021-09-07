__NUXT_JSONP__("/articles/extra-drive", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V){return {data:[{article:{slug:"extra-drive",description:"If you ordered your computer with additional storage, it comes pre-formatted and ready for use. For instructions on automatically mounting an additional hard drive, check out this extra drive documentation.\n",title:"Auto-Mount Second Hard Drive(s)",keywords:["extra drive","mount","automount","boot","support","System76"],facebookImage:"\u002F_nuxt\u002Fimages\u002Fextra-drive-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Fextra-drive-twitterImage.jpg",hidden:false,section:"software",redirect_from:["\u002Fextradrive"],toc:[{id:w,depth:j,text:x},{id:y,depth:j,text:z},{id:A,depth:j,text:B},{id:C,depth:j,text:D},{id:E,depth:j,text:F},{id:G,depth:j,text:H},{id:I,depth:j,text:J}],body:{type:"root",children:[{type:a,tag:e,props:{},children:[{type:b,value:"If you've added a second drive to your computer when you originally ordered it, then it came pre-formatted and ready for use; no additional setup is required. The drive will be made available when you first open it up after each time you start your computer, and will remain mounted until the next start\u002Fboot or until you click the "},{type:a,tag:i,props:{},children:[{type:b,value:"eject (⏏) icon"}]},{type:b,value:". If you prefer to have the drive made available (mounted) automatically every time you start your computer, this is possible with some configuration changes."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Auto-mounting is a per user configuration, and is optional.  Extra drives can always be accessed by clicking on them in the file explorer, which will mount the drive if not currently mounted."}]},{type:b,value:c},{type:a,tag:k,props:{id:w},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#create-mount-point",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Extra drives require a folder on your primary drive where the drive's contents will be made available. This folder is called a mount point. You'll need to create an empty folder in your home folder to serve as this mount point. Navigate to a location for the mount point (e.g. your Documents folder), then right click and choose "},{type:a,tag:i,props:{},children:[{type:b,value:"New Folder"}]},{type:b,value:", then name the folder appropriately; something like "},{type:a,tag:g,props:{},children:[{type:b,value:"ExtraDrive"}]},{type:b,value:" would work. It's recommended not to include any spaces in your mount point name."}]},{type:b,value:c},{type:a,tag:k,props:{id:y},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#copy-mount-point-location",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:z}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Once you've made a mount point, double click it to open it and ensure that it is empty. Any contents within the mount point will be inaccessible while the drive is mounted. Press "},{type:a,tag:h,props:{},children:[{type:b,value:K}]},{type:b,value:L},{type:a,tag:h,props:{},children:[{type:b,value:"L"}]},{type:b,value:" on your keyboard, then select all of the text in the location bar that appears and press "},{type:a,tag:h,props:{},children:[{type:b,value:K}]},{type:b,value:L},{type:a,tag:h,props:{},children:[{type:b,value:"C"}]},{type:b,value:" to copy it. We'll need it later."}]},{type:b,value:c},{type:a,tag:k,props:{id:A},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#locate-the-drive",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Press the Super Key "},{type:a,tag:h,props:{},children:[{type:a,tag:s,props:{":icon":M},children:[]}]},{type:b,value:N},{type:a,tag:h,props:{},children:[{type:a,tag:s,props:{":icon":"['fab', 'pop-os']"},children:[]}]},{type:b,value:O},{type:a,tag:P,props:{},children:[{type:b,value:Q}]},{type:b,value:R},{type:a,tag:h,props:{},children:[{type:b,value:S}]},{type:b,value:". It should open up a window similar to the one below:"}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:t,props:{alt:"Disks Application",src:"\u002Fimages\u002Fextra-drive\u002FStep1.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Click on your extra drive in the list. You can identify it by size, or by the label; the extra drive is usually "},{type:a,tag:r,props:{},children:[{type:b,value:"\u002Fdev\u002Fsdb"}]},{type:b,value:" or "},{type:a,tag:r,props:{},children:[{type:b,value:"\u002Fdev\u002Fsdc"}]},{type:b,value:u}]},{type:b,value:c},{type:a,tag:k,props:{id:C},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#optionally-format-the-drive",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:D}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If this is a new drive, and it is not formatted, it will need to be formatted before use. If the drive has formatting from the manufacturer, it is usually best to format it to the standard format (Ext4). First, delete the existing partition by clicking the "},{type:a,tag:i,props:{},children:[{type:b,value:"minus button"}]},{type:b,value:". Then click the "},{type:a,tag:i,props:{},children:[{type:b,value:"plus icon"}]},{type:b,value:", change the type to "},{type:a,tag:g,props:{},children:[{type:b,value:"(Ext4)"}]},{type:b,value:", give your drive a name, such as "},{type:a,tag:g,props:{},children:[{type:b,value:"Extra Drive"}]},{type:b,value:", and click "},{type:a,tag:i,props:{},children:[{type:b,value:"Create"}]},{type:b,value:u}]},{type:b,value:c},{type:a,tag:k,props:{id:E},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#open-extra-drive-mount-options",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Press the Super key "},{type:a,tag:h,props:{},children:[{type:a,tag:s,props:{":icon":M},children:[]}]},{type:b,value:O},{type:a,tag:P,props:{},children:[{type:b,value:Q}]},{type:b,value:R},{type:a,tag:h,props:{},children:[{type:b,value:S}]},{type:b,value:". Click on the Extra Drive Partition under \"Volumes\", then click on the Gear icon "},{type:a,tag:s,props:{icon:"cog"},children:[]},{type:b,value:" to open the options menu for the Volume. Then click on "},{type:a,tag:i,props:{},children:[{type:b,value:"Edit Mount Options"}]},{type:b,value:u}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:t,props:{alt:"Volume Options Menu",src:"\u002Fimages\u002Fextra-drive\u002FStep2.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:t,props:{alt:"Mount Options Dialog",src:"\u002Fimages\u002Fextra-drive\u002FStep3.png"},children:[]}]},{type:b,value:c},{type:a,tag:k,props:{id:G},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#set-mount-options",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:H}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Turn off the Automatic Mount Options switch, then set the fields as follows:"}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:T,props:{},children:[{type:b,value:"Option"}]},{type:a,tag:T,props:{},children:[{type:b,value:"Value"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Mount at startup"}]},{type:a,tag:d,props:{},children:[{type:b,value:U}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Show in user interface"}]},{type:a,tag:d,props:{},children:[{type:b,value:U}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Require additional authorization to mount"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Unchecked ☐"}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Display Name"}]},{type:a,tag:d,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:v}]}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Icon Name"}]},{type:a,tag:d,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:v}]}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Symbolic Icon Name"}]},{type:a,tag:d,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:v}]}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"{unlabeled field}"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"nosuid,nodev,nofail,x-gvfs-show"}]}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Mount Point"}]},{type:a,tag:d,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"\u002Fhome\u002F..."}]},{type:a,tag:g,props:{},children:[{type:b,value:"{from step 2}"}]}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Identify As"}]},{type:a,tag:d,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"\u002Fdev\u002Fdisk\u002Fby-uuid\u002F..."}]}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Filesystem Type"}]},{type:a,tag:d,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"ext4"}]},{type:b,value:"*"}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"* This will match the default settings. Set accordingly if you reformatted your extra partition with a different filesystem type."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:t,props:{alt:"Mount Options Set Correctly",src:"\u002Fimages\u002Fextra-drive\u002FStep4-updated.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The red box shows the item we don't want to change and the green box shows the item we want to change."}]},{type:b,value:c},{type:a,tag:k,props:{id:I},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#save-and-restart",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:J}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Once the mount options are set up correctly, click "},{type:a,tag:i,props:{},children:[{type:b,value:"OK"}]},{type:b,value:" to save the changes and then restart your computer. After the computer starts back up, ensure that there are no error messages during the boot, and that the drive is mounted when booting. You can check this by opening your home folder and ensure that you see the "},{type:a,tag:i,props:{},children:[{type:b,value:"eject icon (⏏)"}]},{type:b,value:" next to the drive "},{type:a,tag:g,props:{},children:[{type:b,value:"before"}]},{type:b,value:" you click on the drive."}]}]},dir:N,path:"\u002Fextra-drive",extension:".md",createdAt:V,updatedAt:V,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fe54bdadaf285cdda4147b9f7bfc8a53111584b5a",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{"/_ipx/images/extra-drive/Step1.png?w=320&f=png":"\u002F_nuxt\u002Fimage\u002F13459a.png","/_ipx/images/extra-drive/Step1.png?w=640&f=png":"\u002F_nuxt\u002Fimage\u002Fc000a3.png","/_ipx/images/extra-drive/Step1.png?w=768&f=png":"\u002F_nuxt\u002Fimage\u002F177cb9.png","/_ipx/images/extra-drive/Step1.png?w=1024&f=png":"\u002F_nuxt\u002Fimage\u002F154098.png","/_ipx/images/extra-drive/Step1.png?w=1280&f=png":"\u002F_nuxt\u002Fimage\u002F0de52d.png","/_ipx/images/extra-drive/Step1.png?w=1536&f=png":"\u002F_nuxt\u002Fimage\u002F462f1a.png","/_ipx/images/extra-drive/Step1.png?w=320&f=webp":"\u002F_nuxt\u002Fimage\u002Ffef140.webp","/_ipx/images/extra-drive/Step1.png?w=640&f=webp":"\u002F_nuxt\u002Fimage\u002F0ff05a.webp","/_ipx/images/extra-drive/Step1.png?w=768&f=webp":"\u002F_nuxt\u002Fimage\u002F9b369d.webp","/_ipx/images/extra-drive/Step1.png?w=1024&f=webp":"\u002F_nuxt\u002Fimage\u002F59ca9b.webp","/_ipx/images/extra-drive/Step1.png?w=1280&f=webp":"\u002F_nuxt\u002Fimage\u002Fb94a19.webp","/_ipx/images/extra-drive/Step1.png?w=1536&f=webp":"\u002F_nuxt\u002Fimage\u002F8e9107.webp","/_ipx/images/extra-drive/Step2.png?w=320&f=png":"\u002F_nuxt\u002Fimage\u002F5a3225.png","/_ipx/images/extra-drive/Step2.png?w=640&f=png":"\u002F_nuxt\u002Fimage\u002Fce29f8.png","/_ipx/images/extra-drive/Step2.png?w=768&f=png":"\u002F_nuxt\u002Fimage\u002Fcc709b.png","/_ipx/images/extra-drive/Step2.png?w=1024&f=png":"\u002F_nuxt\u002Fimage\u002F03760b.png","/_ipx/images/extra-drive/Step2.png?w=1280&f=png":"\u002F_nuxt\u002Fimage\u002F28b57e.png","/_ipx/images/extra-drive/Step2.png?w=1536&f=png":"\u002F_nuxt\u002Fimage\u002F4e30d7.png","/_ipx/images/extra-drive/Step2.png?w=320&f=webp":"\u002F_nuxt\u002Fimage\u002F011350.webp","/_ipx/images/extra-drive/Step2.png?w=640&f=webp":"\u002F_nuxt\u002Fimage\u002Fc70e07.webp","/_ipx/images/extra-drive/Step2.png?w=768&f=webp":"\u002F_nuxt\u002Fimage\u002F522c54.webp","/_ipx/images/extra-drive/Step2.png?w=1024&f=webp":"\u002F_nuxt\u002Fimage\u002F6e8e5b.webp","/_ipx/images/extra-drive/Step2.png?w=1280&f=webp":"\u002F_nuxt\u002Fimage\u002F9e503e.webp","/_ipx/images/extra-drive/Step2.png?w=1536&f=webp":"\u002F_nuxt\u002Fimage\u002Ff0deb8.webp","/_ipx/images/extra-drive/Step3.png?w=320&f=png":"\u002F_nuxt\u002Fimage\u002F4879ae.png","/_ipx/images/extra-drive/Step3.png?w=640&f=png":"\u002F_nuxt\u002Fimage\u002F55e199.png","/_ipx/images/extra-drive/Step3.png?w=768&f=png":"\u002F_nuxt\u002Fimage\u002F252886.png","/_ipx/images/extra-drive/Step3.png?w=1024&f=png":"\u002F_nuxt\u002Fimage\u002Fca423f.png","/_ipx/images/extra-drive/Step3.png?w=1280&f=png":"\u002F_nuxt\u002Fimage\u002F348c00.png","/_ipx/images/extra-drive/Step3.png?w=1536&f=png":"\u002F_nuxt\u002Fimage\u002F4338f3.png","/_ipx/images/extra-drive/Step3.png?w=320&f=webp":"\u002F_nuxt\u002Fimage\u002F8635e4.webp","/_ipx/images/extra-drive/Step3.png?w=640&f=webp":"\u002F_nuxt\u002Fimage\u002F1dd425.webp","/_ipx/images/extra-drive/Step3.png?w=768&f=webp":"\u002F_nuxt\u002Fimage\u002Fbd43fe.webp","/_ipx/images/extra-drive/Step3.png?w=1024&f=webp":"\u002F_nuxt\u002Fimage\u002F5d4523.webp","/_ipx/images/extra-drive/Step3.png?w=1280&f=webp":"\u002F_nuxt\u002Fimage\u002F43f3b5.webp","/_ipx/images/extra-drive/Step3.png?w=1536&f=webp":"\u002F_nuxt\u002Fimage\u002F68749d.webp","/_ipx/images/extra-drive/Step4-updated.png?w=320&f=png":"\u002F_nuxt\u002Fimage\u002F2f4d0e.png","/_ipx/images/extra-drive/Step4-updated.png?w=640&f=png":"\u002F_nuxt\u002Fimage\u002F0ccbe3.png","/_ipx/images/extra-drive/Step4-updated.png?w=768&f=png":"\u002F_nuxt\u002Fimage\u002F4c41d7.png","/_ipx/images/extra-drive/Step4-updated.png?w=1024&f=png":"\u002F_nuxt\u002Fimage\u002F7f075b.png","/_ipx/images/extra-drive/Step4-updated.png?w=1280&f=png":"\u002F_nuxt\u002Fimage\u002F307920.png","/_ipx/images/extra-drive/Step4-updated.png?w=1536&f=png":"\u002F_nuxt\u002Fimage\u002F20a3f8.png","/_ipx/images/extra-drive/Step4-updated.png?w=320&f=webp":"\u002F_nuxt\u002Fimage\u002Feb67f4.webp","/_ipx/images/extra-drive/Step4-updated.png?w=640&f=webp":"\u002F_nuxt\u002Fimage\u002F4e7088.webp","/_ipx/images/extra-drive/Step4-updated.png?w=768&f=webp":"\u002F_nuxt\u002Fimage\u002Fbe45e2.webp","/_ipx/images/extra-drive/Step4-updated.png?w=1024&f=webp":"\u002F_nuxt\u002Fimage\u002F4ca31d.webp","/_ipx/images/extra-drive/Step4-updated.png?w=1280&f=webp":"\u002F_nuxt\u002Fimage\u002Fb39375.webp","/_ipx/images/extra-drive/Step4-updated.png?w=1536&f=webp":"\u002F_nuxt\u002Fimage\u002F7cdcbc.webp"}}],fetch:{},mutations:void 0}}("element","text","\n","td","p","tr","em","kbd","strong",2,"h2","a","true",-1,"span","icon","icon-link","code","font-awesome-icon","nuxt-picture",".","{leave blank}","create-mount-point","Create Mount Point","copy-mount-point-location","Copy Mount Point Location","locate-the-drive","Locate The Drive","optionally-format-the-drive","(Optionally) Format The Drive","open-extra-drive-mount-options","Open Extra Drive Mount Options","set-mount-options","Set Mount Options","save-and-restart","Save And Restart","Ctrl"," + ","['fab', 'ubuntu']","\u002F"," and then type in ","u","Disks"," and press ","Enter","th","Checked ☑","2021-09-07T16:17:40.121Z")));