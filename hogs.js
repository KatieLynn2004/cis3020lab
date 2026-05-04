document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     HOME PAGE FORM
  ========================= */

  const homeForm = document.getElementById("homeCommentForm");
  const homeMessage = document.getElementById("homeFormMessage");

  if (homeForm) {
    homeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("homeName").value;

      homeMessage.textContent = "Thanks " + name + "! Your comment was received.";
      homeForm.reset();
    });
  }

  /* =========================
     COMMUNITY FORM
  ========================= */

  const communityForm = document.getElementById("communityForm");
  const communityMessage = document.getElementById("communityMessage");

  if (communityForm) {
    communityForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("communityName").value;

      communityMessage.textContent = "Thanks " + name + "! Your submission was received.";
      communityForm.reset();
    });
  }

});