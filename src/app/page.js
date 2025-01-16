import '@fontsource/poppins/400.css'; // Normal weight
import '@fontsource/poppins/700.css'; // Bold weight


export default function Home() {
  return (
      <div style={{ fontFamily: 'Inter, sans-serif', color: '#212121' }}>
          {/* Hero Section */}
          <section style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
                  Simplify Complexity. Unlock Potential.
              </h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#424242' }}>
                  Transform how you analyze, improve, and defend ideas with AI-powered insights.
              </p>
              <input
                  type="text"
                  placeholder="Type your argument here..."
                  style={{
                      padding: '10px 20px',
                      borderRadius: '25px',
                      border: '1px solid #9D9D9D',
                      width: '60%',
                      maxWidth: '400px',
                      marginBottom: '20px'
                  }}
              />
              <div>
                  <button style={{
                      backgroundColor: '#008BD9',
                      color: '#FFFFFF',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                  }}>
                      Get Started
                  </button>
              </div>
          </section>

          {/* Features Section */}
          <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#F5F5F5' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
                  Why Choose ThinkTact.ai?
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', width: '250px' }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>AI-Driven Insights</h3>
                      <p>Analyze arguments with cutting-edge AI tools.</p>
                  </div>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', width: '250px' }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Simplified Decision-Making</h3>
                      <p>Make decisions faster and with greater clarity.</p>
                  </div>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', width: '250px' }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Unshakable Arguments</h3>
                      <p>Present ideas that are logically sound and persuasive.</p>
                  </div>
              </div>
          </section>

          {/* Footer */}
          <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#212121', color: '#FFFFFF' }}>
              <p>© 2025 ThinkTact.ai - All Rights Reserved</p>
          </footer>
      </div>
  );
}

