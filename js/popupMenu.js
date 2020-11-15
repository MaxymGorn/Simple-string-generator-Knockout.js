var CLIPBOARD = "";

$(function(){
  $(document).contextmenu({
    delegate: "#result",
    autoFocus: true,
    preventContextMenuForPopup: true,
    preventSelect: true,
    taphold: true,
    menu: [
      {title: "Copy", cmd: "copy"},
      ],
    select: function(event, ui) {
      var $target = ui.target;
      switch(ui.cmd){
      case "copy":
        CLIPBOARD = $target.text();
        break;
      }
        let text=$target.text();
        copyText(text);
    },
    beforeOpen: function(event, ui) {
      var $menu = ui.menu,
        $target = ui.target,
        extraData = ui.extraData; 
      $(document)
        .contextmenu("setEntry", "copy", "Copy '" + $target.text() + "'")
        .contextmenu("setEntry", "paste", "Paste" + (CLIPBOARD ? " '" + CLIPBOARD + "'" : ""))
        .contextmenu("enableEntry", "paste", (CLIPBOARD !== ""));
    }
  });

});
    function copyText(text) {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("Text copied successfully!");
    }