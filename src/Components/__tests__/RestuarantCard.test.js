import { render, screen } from "@testing-library/react"
import Fooditems from "../Fooditems"
import MOCK_DATA  from "../mockdata/resCardInfo.test.json"
import "@testing-library/jest-dom"


it("should render RestaurantCard component ",()=>{

    render(<Fooditems Resdata={MOCK_DATA}/>)

    const rescard = screen.getByText("Burger King");

    expect(rescard).toBeInTheDocument();
})
