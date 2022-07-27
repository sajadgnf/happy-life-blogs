import { useEffect } from "react"

type Props = {
    email: string,
    name: string,
    text: string
}

const validate = (data: Props) => {

    const errors: Props = {
        email: "",
        name: "",
        text: ""
    }

    if (!data.email) {
        errors.email = 'لطفا ایمیل خود را وارد کنید'
    } else if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/.test(data.email)) {
        errors.email = 'لطفا ایمیل خود را به صورت صحیح وارد کنید'
    } else {
        delete errors.email
    }

    if (!data.name.trim()) {
        errors.name = 'لطفا نام خود را وارد کنید'
    } else {
        delete errors.name
    }


    if (!data.text.trim()) {
        errors.text = 'لطفا متن مورد نظر خود را وارد کنید'
    } else {
        delete errors.text
    }

    return errors
}


export { validate }