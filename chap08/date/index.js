// const d = new Date(),
//     h = d.getHours(),
//     m = d.getMonth(),
//     s = d.getSeconds();

//     //24시간제 => 12시간제 변경
//     const h12 = (h > 12) ? (h-12) : h;

//     //12시간제 - 오전 오후 판정
//     const ampm = (h < 12)  ? "오전" : "오후";

//     //분 2자릿수 표시
//     const min_o = (m < 10) ? "0" : "";

//     //초 2자릿수 표시
//     const sec_o = (s < 10) ? "0" : "";

//     const time = ampm + " " + h12 + ":" + min_o + m + ":" + sec_o + s;


//요일 출력
const d = new Date();
const year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();

    //요일 판단
    switch(day) {
        case 0 : var dd = "일"; break;
        case 1 : var dd = "월"; break;
        case 2 : var dd = "화"; break;
        case 3 : var dd = "수"; break;
        case 4 : var dd = "목"; break;
        case 5 : var dd = "금"; break;
        case 6 : var dd = "토"; break;
        default : break;
    }

    document.write(year + "년 ");
    document.write((month + 1) + "월 ");
    document.write(date + "일 ");
    document.write(dd + "요일<br />");