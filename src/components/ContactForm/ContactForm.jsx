import React, {useState} from 'react';
import Axios from 'axios';
import Message from '../common/Message';

const ContactForm = () => {
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const [resMessage, setResMessage] = useState();

	const submitForm = () => {
        const url = 'https://fridarosengren.com/portf/wp-json/contact-form-7/v1/contact-forms/24/feedback';
        
        // Set form data
        const bodyData = new FormData();
        bodyData.set('yourName', name);
        bodyData.set('yourEmail', email);
        bodyData.set('yourMessage', message);

        // Send post request
        Axios({
            method: 'post',
            url: url,
            data: bodyData,
            config: { headers: {'Content-Type': 'multipart/form-data'}}
        }).then(res => {
            setResMessage(res.data.message);
            console.log(res)
        }).catch(err => {
            console.log(err)
        });
	}
	const handleClick = e => {
		// Run axios request on click
        e.preventDefault();
        submitForm();
	}

	return (
        <React.Fragment>
			<form encType='multipart/form-data' onSubmit={handleClick}>
				<input type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)} /><br />
				<input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br />
				<textarea onChange={e => setMessage(e.target.value)} name="message" placeholder="Message" rows="5"></textarea ><br />
				<input type="submit" value="Send" />
			</form>
            {resMessage && <Message>{resMessage}</Message>}
        </React.Fragment>
	);
}

export default ContactForm;