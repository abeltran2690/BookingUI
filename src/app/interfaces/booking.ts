export interface createBookingDTO {

}

export interface createClientDTO {
    name?: String;
    surname?: String;
    identificationType?: String;
    identification?: number;
}

export interface identificationType{
    value?: String;
    viewValue?: String;
}