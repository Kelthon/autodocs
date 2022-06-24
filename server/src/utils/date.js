const moment = require("moment")

// Definição da estrutura de formatação de horas no pradrão pt-br
moment.defineLocale("pt-br", {
    months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
    monthsShort: "jan_fev_mar_mai_jun_ago_set_out_nov_dez".split("_"),
    monthsParseExact : true,
    weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
    weekdaysShort : "domingo_segunda_terça_quarta_quinta_sexta_sábado".split("_"),
    weekdaysMin : "dom_seg_ter_qua_qui_sex_sáb".split("_"),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL : 'dddd[,] D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: '[em] dddd [às] LT',
        sameElse: 'L',
    },
    relativeTime : {
        future : 'Em %s',
        past : 'Há %s',
        s : 'alguns segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'un mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
});

function date(format = "LL") {
    moment.locale("pt-br");
    return moment().format(format);
}

module.exports = date