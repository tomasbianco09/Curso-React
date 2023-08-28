import{createContext, useState, useEffect} from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const totalCompra = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

    const calcularImpuestos = (totalCompra) => {
        return totalCompra * 0.21;
    };

    const impuesto = calcularImpuestos(totalCompra);
    const totalConImpuesto = totalCompra + impuesto

    const clearCart = () => {
        setCart([])
    };

    // Cargar el carrito desde el localStorage al montar el componente
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Guardar el carrito en el localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return(

        <CartContext.Provider value={[cart, setCart, clearCart, totalCompra, impuesto, totalConImpuesto ]}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;