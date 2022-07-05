

export class UserCreate {
    google_id: string = ''
    name: string = ''
    status: string = ''

    constructor({
        goolge_id,
        name,
        status
    }: any) {
        this.google_id = goolge_id;
        this.name = name;
        this.status = status;
    }
}

export class UserUpdate {
    google_id?: string = ''
    name?: string = ''
    status?: string = ''

    constructor({
        google_id,
        name,
        status
    }: any) {
        if (google_id) {
            this.google_id = google_id
        }

        if (name) {
            this.name = name;
        }
        
        if (status) {
            this.status = status;
        }  
    }

    clear() {
        // console.log(this)
        delete this.status

        if (this.name === '') {
            delete this.name
        }

        if (this.google_id === '') {
            delete this.google_id
        }
        
    }
}

