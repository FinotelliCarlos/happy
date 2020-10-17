const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    
    //inserir dado na tabela 
   await saveOrphanage(db, {
    lat: "-23.5197659",
    lng: "-46.8922576",
    name: "Lar de amor",
    about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "121212121",
    images:[
        "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horario de Visitas das 18h até 8h",
    open_on_weekends: "1"
},)

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "#"')
    console.log(orphanage)

    //deletar dado da tabela
    console.log(await db.run('DELETE FROM orphanages where ID = "#"'))
})