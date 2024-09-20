/* 0.5.7 2022-12-27 16:37:09 */
var app=new function(){this.name="Bonfire",this.version="2",this.date="2022",this.folder="asset-v2/",this.looptime=6000,this.bpm=160,this.totalframe=256,this.nbpolo=7,this.nbloopbonus=8,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=600,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#000000",this.col0="#479A83",this.col1="#38777B",this.col2="#2D5D6B",this.col3="#23485F",this.col4="#1C3852",this.animearray=[{name:"1_struck",color:"2426A1",uniqsnd:!1},{name:"2_compass",color:"2426A1",uniqsnd:!1},{name:"3_anaconda",color:"2426A1",uniqsnd:!1},{name:"4_rubiks",color:"2426A1",uniqsnd:!1},{name:"5_switch",color:"2426A1",uniqsnd:!1},{name:"6_bass",color:"B89412",uniqsnd:!1},{name:"7_thruster",color:"B89412",uniqsnd:!1},{name:"8_brock",color:"B89412",uniqsnd:!1},{name:"9_shakatu",color:"B89412",uniqsnd:!0},{name:"10_alarm",color:"B89412",uniqsnd:!0},{name:"11_arpeggio",color:"162B6F",uniqsnd:!1},{name:"12_stuv",color:"162B6F",uniqsnd:!1},{name:"13_wauh",color:"162B6F",uniqsnd:!1},{name:"14_synth",color:"162B6F",uniqsnd:!1},{name:"15_jambot",color:"162B6F",uniqsnd:!1},{name:"16_settle",color:"479A83",uniqsnd:!1},{name:"17_choir",color:"479A83",uniqsnd:!1},{name:"18_robo",color:"479A83",uniqsnd:!1},{name:"19_skin",color:"479A83",uniqsnd:!1},{name:"20_cutchoir",color:"479A83",uniqsnd:!1}],this.bonusarray=[{name:"Reboot",src:"v1-b1-reboot-hb.mp4",code:"1,3,6,11,16",sound:"bonus-reboot",aspire:"aspire"},{name:"Reboot",src:"v1-b1-reboot-hb.mp4",code:"1,3,6,11,16",sound:"bonus-reboot",aspire:"aspire"},{name:"Reboot",src:"v1-b1-reboot-hb.mp4",code:"1,3,6,11,16",sound:"bonus-reboot",aspire:"aspire"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var i=this.animearray[n].name;this.animearray[n].soundA=i+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?i+"_a":i+"_b",this.animearray[n].anime=i+"-sprite.png",this.animearray[n].animeData=i+".json"}};
