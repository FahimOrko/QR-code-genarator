

$("#genarte-button").on("click", function () {

    let qrVal = $("#url-Link").val();

    if(!qrVal) return;

    console.log(qrVal);

    const x = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrVal;

    let y = $("#qrImage").attr("src",x);
    
    // console.log(x);

    $(".wrapper").addClass("active");
})
