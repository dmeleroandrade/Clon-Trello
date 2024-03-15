//Estado inicial

export default {
    user: null,
    fetchingData: true,
     error: null,
     
     board: {
       /**
        id: {
            id,
            owner,
            name
        }
        */
     },
     lists: {
        /**
        id: {
            id,
            board,
            name
        }
        */
     },
     tasks: {
        /**
        id: {
            id,
            list,
            name
        }
        */
     }
}