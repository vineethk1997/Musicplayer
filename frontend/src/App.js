import './App.css';
import React from 'react';
import AuthUser from './Util/AuthUser';
import Guest from './navbar/guest';
import Auth from './navbar/auth';


function App(){
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest/>
  }
  return (
      <Auth/>
  );
}

export default App;


































// function App() {


//   return (
//     <div>
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand>Music Player</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text>
//             <Button id="form_btn" onClick={update_form_btn} variant="light">Register</Button>
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     {
//       registrationToggle ? (
//         //registration
//         <div className="center">
//           <Form onSubmit={e => submitRegistration(e)}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicUsername">
//               <Form.Label>Username</Form.Label>
//               <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </div>        
//       ) : (
//         //login
//         <div className="center">
//           <Form onSubmit={e => submitLogin(e)}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </div>
//       )
//     }
//     </div>
//   );
// }

// export default App;


// //http://127.0.0.1:8000