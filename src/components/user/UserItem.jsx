import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const UserItem = ({ user }) => {
  return (
    <UserItemWrapper className="user-item-wrapper">
      <UserHeader>
        <UserHeaderImgBlock>
          <UserHeaderImg src="/img/logo.svg" alt="" />
        </UserHeaderImgBlock>
        <Link to={`/users/${user.id}`} style={{ textAlign: "left" }}>
          <UserH5>{user.firstName}</UserH5>
          <UserH6>{user.lastName}</UserH6>
        </Link>
      </UserHeader>
      <UserDescription>{user.description}</UserDescription>
      <UserListUl>
        <UserListItemLi>
          <b>Email:</b> <span>{user.email}</span>
        </UserListItemLi>
        {!user.gender ? null : (
          <UserListItemLi>
            <b>Gender:</b> <span>{user.gender}</span>
          </UserListItemLi>
        )}
        {!user.age ? null : (
          <UserListItemLi>
            <b>Age:</b> <span>{user.age}</span>
          </UserListItemLi>
        )}
      </UserListUl>
    </UserItemWrapper>
  )
}

const UserItemWrapper = styled.div`
  background: #f3f3f3;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 16px;
  border-radius: 7px;
  margin-right: 35px;
  margin-bottom: 25px;
`
const UserHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
const UserHeaderImgBlock = styled.div`
  width: 80px;
  height: 80px;
`
const UserHeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const UserH5 = styled.h5`
  margin-bottom: 0;
`
const UserH6 = styled.h6``
const UserDescription = styled.div`
  margin-bottom: 15px;
  text-align: left;
`
const UserListUl = styled.ul`
  padding-left: 0;
  text-align: left;
  list-style-type: none;
`
const UserListItemLi = styled.li``

export default UserItem
