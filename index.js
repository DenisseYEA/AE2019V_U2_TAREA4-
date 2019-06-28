const sendmail = require("./sendmail");

const nombre = "Israel Arjona Vizcaíno";

const env = {
    to: "iarjona@ittepic.edu.mx",
    subject: "Tarea4 - AE2019V",
    text: `Este es un mensaje que se "envio" a ${nombre}`,
    html: `<body>
    <div align="center">
    <img src="https://dentedaluminum.com/wp-content/uploads/2019/02/brunomarsvegas.jpg" width="50%" height="50%"
            class="CToWUd a6T" tabindex="0">
        <p>
            <table style="background-color:black;width:50%;">
                <tr style="color:hotpink;">
                    <th><strong style="font-size:160%;">Sec</strong></th>
                    <th><strong style="font-size:160%;">Row</strong></th>
                    <th><strong style="font-size:160%;">Seat</strong></th>
                    <th><strong style="font-size:160%;">Admit</strong></th>
                </tr>
                <tr style="color:white">
                    <th><strong style="font-size:200%;">GA</strong></th>
                    <th><strong style="font-size:200%;">-</strong></th>
                    <th><strong style="font-size:200%;">-</strong></th>
                    <th><strong style="font-size:130%;">General</strong></th>
                </tr>
                <tr style="color:white">
                    <th><strong style="font-size:200%;"></strong></th>
                    <th><strong style="font-size:200%;"></strong></th>
                    <th><strong style="font-size:200%;"></strong></th>
                    <th><strong style="font-size:130%;">Admission</strong></th>
                </tr>
            </table>
            <table style="background-color:hotpink;width:50%;">
                <tr style="color:white;">
                    <th><strong style="font-size:125%;">tiketmaster</strong></th>
                    <th><strong style="font-size:125%;">tiketmaster</strong></th>
                    <th><strong style="font-size:125%;">tiketmaster</strong></th>
                    <th><strong style="font-size:125%;">tiketmaster</strong></th>
                </tr>
            </table>
            <table style="background-color:lightgoldenrodyellow;width:50%;">
                <tr style="color:hotpink">
                    <th><strong style="font-size:160%;">Date</strong></th>
                    <th><strong style="font-size:160%;">Price</strong></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr style="color:black">
                    <th><strong style="font-size:160%;">Fri,Sep 13th 2019</strong></th>
                    <th><strong style="font-size:160%;">$400</strong></th>
                </tr>
            </table>
            <table style="background-color:lightgoldenrodyellow;width:50%;">
                <tr style="color:black">
                    <th><br><br><br><br><strong style="font-size:160%;">24K MAGIC WORLD TOUR 2019</strong></th>
                </tr>
                <tr style="color:black">
                    <th><strong style="font-size:200%;">BRUNO MARS</strong></th>
                </tr>
                <tr style="color:black">
                    <th><br><br><strong style="font-size:130%;">SPECIAL GUESTS</strong></th>
                </tr>
                <tr style="color:black">
                    <th><strong style="font-size:160%;">JONAS BROTHERS</strong></th>
                </tr>
                <tr style="color:black">
                    <th><strong style="font-size:160%;">DADDY YANKEE</strong></th>
                </tr>
                <tr style="color:black">
                    <th><br><br><strong style="font-size:160%;">ARENA</strong><br><br></th>
                </tr>
            </table>
            <table style="background-color:black;width:50%;">
                <tr style="color:hotpink;">
                    <th><br><strong style="font-size:160%;">CODE QR</strong></th>
                </tr>
                <tr style="color:white">
                    <th><img src='https://chart.googleapis.com/chart?cht=qr&chl=BrunoMarsByDenisseYEA&chs=180x180&choe=UTF-8&chld=L|2'
                            alt='qr code'><a href='https://es.qr-code-generator.com/a1/?ut_source=google_t&ut_medium=cpc&ut_campaign=es_similar_to_before_trial_bannerset_test&ut_content=bannerset_design_qr_codes_similar_to_es&ut_term=139.android.com.digidust.elokence.akinator.freemium.adsenseformobileapps.com&gclid=EAIaIQobChMI8vDqp4GL4wIVFRYBCh25zgfsEAEYASAAEgIHhPD_BwE
                            ' border='0' style='cursor:default' rel='nofollow'></a></th>
                </tr>
            </table>
        </p>
        </div>
</body>`
}

sendmail.send(env);