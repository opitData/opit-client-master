
export const Car = (_id = 0) => {
    return (
        {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            apartmentNum: '',
            carKind: '',
            carNum: '',
            parkings: [{ parkingNum: '', floor: '', index: 0 }],
            _id: _id
        }
    );
}