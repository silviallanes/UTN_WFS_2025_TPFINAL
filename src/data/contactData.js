/* Esto en una app real NO EXISTE, solo estamos guardando datos de mook (boceto) para hacer pruebas */
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Maria',
        contact_avatar: 'https://img.freepik.com/fotos-premium/mujer-gato-tendido-cama-casa_1048944-10042917.jpg',
        contact_unseen_messages: 5,
        last_message_content: 'testing',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date(),
        /* Realizar el renderizado de la lista de mensajes */
        messages: [
            {
                message_id: 1,
                message_content: 'Que tal?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Todo bien?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Juan',
        contact_avatar: 'https://img.freepik.com/fotos-premium/hombre-visitando-parques-nacionales-viajando-mundo_191555-6513.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Que tal?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'Grupo Trabajo',
        contact_avatar: 'https://img.freepik.com/fotos-premium/grupo-personas-trabajando-computadoras-oficina_1072138-55526.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Nos reunimos?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Reunión a las 10 am',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 4,
        contact_name: 'Veterinario',
        contact_avatar: 'https://up.yimg.com/ib/th/id/OIP.Pq8xngvWZFAiMWjKmSluZgHaE8?pid=Api&rs=1&c=1&qlt=95&w=144&h=96',
        contact_unseen_messages: 0,
        last_message_content: 'Para cuándo me puede dar un turno?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Te espero mañana a las 16:40',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]

    },
    {
        contact_id: 5,
        contact_name: 'Mamá',
        contact_avatar: 'https://thumbs.dreamstime.com/b/retrato-de-la-se%C3%B1ora-mayor-2369131.jpg',
        contact_unseen_messages: 1,
        last_message_content: 'te esperamos para Navidad!!',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date(),
        /* Realizar el renderizado de la lista de mensajes */
        messages: [
            {
                message_id: 1,
                message_content: 'Que tal?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Todo bien?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 6,
        contact_name: 'Hugo',
        contact_avatar: 'https://media-eze1-2.cdn.whatsapp.net/v/t61.24694-24/564883564_823555487329759_1182378501059881750_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa3QFd0nP2hIBVBtbjTvzN_qQHOio2a28CXU2QHxJPmvBEfA&oe=6951B91A&_nc_sid=5e03e0&_nc_cat=100',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Que tal?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    }

]

export default contact_data