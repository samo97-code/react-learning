import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import "./UserSlider.scss"
import { fetchAllUsers } from "../../store/actions/userAction"
import { useDispatch } from "react-redux"
import UserItem from "../user/UserItem"

const UserSlider = () => {
  const dispatch = useDispatch()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const [users, setUsers] = useState([])

  useEffect(async () => {
    const resp = await dispatch(fetchAllUsers())
    setUsers(resp.data)
  }, [])

  const userItem = users?.map((user) => {
    return <UserItem key={user.id} user={user} />
  })

  return (
    <SliderWrapper className="mt-4 mb-5">
      <SliderTitle>Our Users</SliderTitle>
      <Slider {...settings}>{userItem}</Slider>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div``
const SliderTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`

export default React.memo(UserSlider)
