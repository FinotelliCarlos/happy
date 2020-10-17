const Database = require('./db');

Database.then(async db => {
    //inserir dado na tabela 
   await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.5197659",
            "-46.8522576",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "11972388905",
            "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horario de Visitas das 18h até 8h",
            "0"
        );
    `)

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    consultar somente 1 orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)
})