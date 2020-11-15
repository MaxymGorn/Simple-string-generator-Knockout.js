const {
    Splitpanes,
    Pane
} = splitpanes

const app = new Vue({
    el: '#app',
    components: {
        Splitpanes,
        Pane
    },
    data: () => ({
        mobile: false
    })
})

$(document).ready(function () {
    $('.splitpanes__splitter').on("click", function () {
        $("button").click(function () {
        });
        //alert("Click!");
    });
});
