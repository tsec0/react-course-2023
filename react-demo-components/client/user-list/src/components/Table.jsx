/* eslint-disable no-unused-vars */
import * as userService from '../services/userService.js';
import { useEffect, useState } from "react";

import UserItem from "./UserItem.jsx";
import CreateUserModal from "./CreateUsermodal.jsx";
import UserInfoModal from "./UserInfoModal.jsx";
import UserDeleteModal from './userDelete.jsx';
import Spinner from './Spinner.jsx';

const Table = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showDelete, setShowDelete] = useState(false);

    // console.log(users);

    useEffect(() => {
        setIsLoading(true);

        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    const createUserClickHandler = () => {
      setShowCreate(true);
    }

    const hideCreateUserModal = () => {
      setShowCreate(false);
    }

    // try - catch
    const userCreateHandler = async (e) => {
      // Stop page from reloading
      e.preventDefault();

      // Get data from form
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData); // const { firstName, } = ...

      // Create user on the server
      const result = await userService.create(data);

      // the state knows about the newly added user
      setUsers(state => [...state, result]);

      //const newUser = await userService.create(data)
      //setUsers(state => [...state, newUser])

      setShowCreate(false);
    };

    const deleteClickHandler = (userId) => {
        setSelectedUser(userId);
        setShowDelete(true);
    }

    const deleteUserHandler = async () => {
        // remove user from server
        await userService.remove(selectedUser);
        
        // remove user from state - create new refarance without the selectedUser (which is the selected id)
        setUsers(state => state.filter(user => user._id !== selectedUser));

        // close delete modal
        setShowDelete(false);
    }

    const userInfoClickHandler = async (userId) => {
        setSelectedUser(userId);
        setShowInfo(true);
    };

    return (
        <div className="table-wrapper">
          {showCreate && (
            <CreateUserModal 
                hideModal={hideCreateUserModal} 
                onCreate={userCreateHandler} 
              />
            )}

          { showInfo && (
            <UserInfoModal 
              onClose={() => setShowInfo(false)} 
              userId={selectedUser}/>
          )}

          { showDelete && (
            <UserDeleteModal
              onClose={() => setShowDelete(false)} 
              onDelete={deleteUserHandler}/>
          )}

          {isLoading && <Spinner />}

          <table className="table">
            <thead>
              <tr>
                <th>
                  Image
                </th>
                <th>
                  First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                    </path>
                  </svg>
                </th>
                <th>
                  Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                    </path>
                  </svg>
                </th>
                <th>
                  Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                    </path>
                  </svg>
                </th>
                <th>
                  Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                    </path>
                  </svg>
                </th>
                <th>
                  Created
                  <svg aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                    </path>
                  </svg>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <UserItem
                  key={user._id}
                  userId={user._id}
                  {...user} // the same as the properties of the user object
                  onInfoClick={userInfoClickHandler}
                  onDeleteClick={deleteClickHandler}
                />
              ))}
            </tbody>
          </table>

          <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
        </div>
    );
}

export default Table;
