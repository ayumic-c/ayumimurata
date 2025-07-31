{
  document.addEventListener("DOMContentLoaded", () => {
    // 生年月日を設定
    const birthDate = new Date("1999-07-29");

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // 誕生日がまだ来ていなければ1歳引く
    const hasHadBirthdayThisYear = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    document.getElementById("my-age").textContent = age;
  });
}
