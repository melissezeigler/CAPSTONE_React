// This is where the back-end and the front-end connects
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://capstone-render-cxld.onrender.com/api/trails`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 3a23f42797c62d7579788461f0484aae9b0c07be0bcab5d3'
            },
        })

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://capstone-render-cxld.onrender.com/api/trails`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 3a23f42797c62d7579788461f0484aae9b0c07be0bcab5d3'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://capstone-render-cxld.onrender.com/api/trails/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 3a23f42797c62d7579788461f0484aae9b0c07be0bcab5d3'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://capstone-render-cxld.onrender.com/api/trails/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'bearer 3a23f42797c62d7579788461f0484aae9b0c07be0bcab5d3'
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }
        
        return;
    },
}