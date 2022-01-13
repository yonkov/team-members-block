interface Fullname {
	firstName: string;
    lastName: string;
};

interface Options extends Fullname{
	attributes:any, 
	setAttributes:any,
}

export default Options