import React from 'react';

const Login = () => {
  return (
    <div className="container login-container" style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="text-center">Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" required />
        </div>
        <div className="checkbox">
          <label><input type="checkbox" name="remember" /> Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
};

export default Login;
