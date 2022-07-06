

export const CartType = {
    REQUEST: 'request',
    APPROVE: 'approve',
    FINISH: 'finish',
    CANCEL: 'cancel'
}

export const selectCardUIByStatus = (status: any) => {
    if (status === 'request') {
        return {
            text: {
                status: 'รอการอนุมัติ',
                btn: 'อนุมัติคำขอรายการ'
            },
            classes: {
                status: 'request',
                btn: 'approve-btn'
            }
        }
    } else if (status === 'approve') {
        return {
            text: {
                status: 'เริ่มดำเนินการ',
                btn: 'ดำเนินการเสร็จสิ้น'
            },
            classes: {
                status: 'approve',
                btn: 'approve-btn'
            }
        }
    } else if (status === 'finish') {
        return {
            text: {
                status: 'ดำเนินการเรียบร้อย',
                btn: ''
            },
            classes: {
                status: 'finish',
                btn: ''
            }
        }
    }else if (status === 'cancel') {
        return {
            text: {
                status: 'รายการถูกยกเลิก',
                btn: ''
            },
            classes: {
                status: 'cancel',
                btn: ''
            }
        }
    } else {
        return {
            text: {
                status: '',
                btn: ''
            },
            classes: {
                status: '',
                btn: ''
            }
        }
    }
}


export const sampleRequest = [
    {
        title: 'ห้องน้ำชำรุด',
        date: 'September 14, 2016',
        taskStatus: 'request',
        detail: 'ต้องการเปลี่ยนสายฉีดน้ำครับ 3 ตัว',
        price: 500
    },
    {
        title: 'ประตูเสีย',
        date: 'September 14, 2016',
        taskStatus: 'request',
        detail: 'เบิกแม่กุญแจใหม่ 2 ตัว',
        price: 300
    }
]

export const sampleApprove = [
    {
        title: 'ห้องน้ำชำรุด',
        date: 'September 14, 2016',
        taskStatus: 'approve',
        detail: 'ต้องการเปลี่ยนสายฉีดน้ำครับ 3 ตัว',
        price: 500
    },
    {
        title: 'ประตูเสีย',
        date: 'September 14, 2016',
        taskStatus: 'approve',
        detail: 'เบิกแม่กุญแจใหม่ 2 ตัว',
        price: 300
    }
]

export const sampleFinish = [
    {
        title: 'ห้องน้ำชำรุด',
        date: 'September 14, 2016',
        taskStatus: 'finish',
        detail: 'ต้องการเปลี่ยนสายฉีดน้ำครับ 3 ตัว',
        price: 500
    },
    {
        title: 'ประตูเสีย',
        date: 'September 14, 2016',
        taskStatus: 'cancel',
        detail: 'เบิกแม่กุญแจใหม่ 2 ตัว',
        price: 300
    }
]