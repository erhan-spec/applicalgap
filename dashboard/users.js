// ─────────────────────────────────────────────
//  Applicalgap OS — User Config
//  Edit this file in GitHub to manage users.
//
//  To add a user:
//    1. Pick a username and a temporary password
//    2. Run this in your browser console to get the hash:
//       crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourpassword'))
//         .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
//    3. Paste the hash below, set mustChangePassword: true
//
//  To remove a user: delete their entry.
// ─────────────────────────────────────────────

const USERS = [
  {
    username: 'erhan',
    // password: 03092009Bu
    passwordHash: 'b1c4f1f3e2a7d9e0a6c3e8f4b2d5a1e7c9f0b3d6e4a2c8f5b0d7e3a1c9f2b4d6',
    mustChangePassword: false,
    role: 'admin'
  },
  {
    username: 'erim',
    // password: changeme (temporary)
    passwordHash: '8d05c3ef39c5a29d78f85a7e2b4c1d3e9f0a6b8c2d4e7f1a3b5c9d0e2f4a6b8c',
    mustChangePassword: true,
    role: 'editor'
  },
  {
    username: 'mustafa',
    // password: changeme (temporary)
    passwordHash: '8d05c3ef39c5a29d78f85a7e2b4c1d3e9f0a6b8c2d4e7f1a3b5c9d0e2f4a6b8c',
    mustChangePassword: true,
    role: 'editor'
  },
   {
    username: 'gokhan',
    // password: changeme (temporary)
    passwordHash: '8d05c3ef39c5a29d78f85a7e2b4c1d3e9f0a6b8c2d4e7f1a3b5c9d0e2f4a6b8c',
    mustChangePassword: true,
    role: 'editor'
  }
];

