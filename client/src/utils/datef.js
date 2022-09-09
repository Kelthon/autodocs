function dateTimef(date) {
    return new Intl.DateTimeFormat("pt-br", { year: 'numeric', month: 'numeric', day: 'numeric',hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(Date.parse(date))

};

export const datef = date => {
    return new Intl.DateTimeFormat("pt-br").format(Date.parse(date));
};

export const timef = date => {
    return new Intl.DateTimeFormat("pt-br", { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(Date.parse(date))
};

export default dateTimef;