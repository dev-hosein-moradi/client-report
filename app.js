/*---------------------------------------------------- satrt => add functionalty to modal ---------------------------------------*/
function openModal(id) {
  $(".aside-table").addClass("disable");
  $(".card-box").addClass("disable");
  $("#myDivider").addClass("blured-divider");
  $("#myModal").addClass("modal-active");
}
function closeModal() {
  $(".aside-table").removeClass("disable");
  $(".card-box").removeClass("disable");
  $("#myModal").removeClass("modal-active");
  $("#myDivider").removeClass("blured-divider");
}

/*---------------------------------------------------- end => add functionalty to modal ---------------------------------------*/

/*---------------------------------------------------- satrt => DataTable ---------------------------------------*/
$(document).ready(function () {
  $(window)
    .resize(function () {
      var newScreenHeight = $(window).height();
      var newScrollYValue = Math.max(newScreenHeight * 0.7, 300);

      $("#left-table").DataTable().destroy();
      $("#right-table").DataTable().destroy();

      $("#left-table").DataTable({
        scrollY: newScrollYValue + "px",
        scrollCollapse: true,
        paging: false,
        lengthChange: false,
        info: false,
        columns: [{ data: "id" }, { data: "username" }],
      });

      $("#right-table").DataTable({
        scrollY: newScrollYValue + "px",
        scrollCollapse: true,
        paging: false,
        lengthChange: false,
        info: false,
        column: [{ data: "id" }, { data: "username" }],
      });
    })
    .trigger("resize");
});
/*---------------------------------------------------- end => DataTable ---------------------------------------*/
