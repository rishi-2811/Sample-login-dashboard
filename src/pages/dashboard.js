import React, { useState } from 'react';
import { HomeIcon, UserIcon, CogIcon, MenuIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = [
    { icon: HomeIcon, text: 'Home' },
    { icon: UserIcon, text: 'Profile' },
    { icon: CogIcon, text: 'Settings' },
  ];

  const groceryItems = [
    { name: 'Apples', price: 1.99 },
    { name: 'Bananas', price: 0.99 },
    { name: 'Milk', price: 2.49 },
    { name: 'Bread', price: 2.29 },
    { name: 'Eggs', price: 3.49 },
    { name: 'Cheese', price: 4.99 },
    { name: 'Chicken', price: 5.99 },
    { name: 'Pasta', price: 1.79 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <button 
        className="fixed top-4 left-4 p-2 bg-white rounded-md shadow-md md:hidden z-20" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon className="h-6 w-6 text-gray-500" />
      </button>
      
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:static md:translate-x-0 z-10`}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-center">Dashboard</h1>
        </div>
        <nav className="p-4">
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index} className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
                <item.icon className="h-6 w-6 text-gray-500" />
                <span className="ml-2 text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      <main className="flex-1 p-6 ">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>User Name</span>
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300" onClick={()=>{
                navigate('/')
            }}>
              Logout
            </button>
          </div>
        </header>
        <h2 className="text-2xl font-bold mb-4">Grocery Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {groceryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={`/apple.jpg`} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;