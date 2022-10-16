export default async({request, response}) => {
    if(!request.hasBody){
        response.status = 400;
        response.body = { msg: "Invalid data" };
        return;
    }

    /**
     * Fieldsets should have config data (names, labels, type), as well
     * as metadata for the set (ie column size (1 or 2))
     */
    const { config: config, columns } = request.body().value;

    if( !config || columns <= 0) {
        response.status = 422;
        response.body = { msg: "request missing either config or columns"};
        return;
    }

    response.body = { msg: "complete" };
}

export type config = {
    name: String,
    labels: String,
    type: String,
};

