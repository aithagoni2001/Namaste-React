import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import AppStore from "../../utils/ReduxStore/AppStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

it("should render header component",()=>{

    render(
        <BrowserRouter>
<Provider store ={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        )
        const headerbutton = screen.getByRole("button")
// assertion
        expect(headerbutton).toBeInTheDocument();
   
})
it("should load login in header component",()=>{

    render(
        <BrowserRouter>
<Provider store ={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        )
        const headerLogin = screen.getByText("login")
// assertion
        expect(headerLogin).toBeInTheDocument();
   
})

it("should load login in header component",()=>{

    render(
        <BrowserRouter>
<Provider store ={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        )
        const headerLogin = screen.getByRole("button",({name:"login"}))
        fireEvent.click(headerLogin);

        const headerlogout = screen.getByRole("button",({name:"logout"}))
// assertion
        expect(headerlogout).toBeInTheDocument();
   
})
it("should load cart count in header component",()=>{

    render(
        <BrowserRouter>
<Provider store ={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        )
        const cart = screen.getByText("🛒(0)")
// assertion
        expect(cart).toBeInTheDocument();
   
})
