function openTab(evt, contentName) {
    var i, tabcontent, tablinks;

    // إخفاء جميع عناصر المحتوى
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // إزالة فئة "active" من جميع أزرار القائمة
    tablinks = document.getElementsByClassName("tab-item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // إظهار المحتوى الحالي، وإضافة فئة "active" للزر/الخيار الذي تم النقر عليه
    document.getElementById(contentName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// تشغيل أول خيار افتراضيًا عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab-content').classList.add('active');
    document.querySelector('.tab-item').classList.add('active');
});