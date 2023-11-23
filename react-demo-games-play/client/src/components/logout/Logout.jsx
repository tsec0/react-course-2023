/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Path from "../../paths";

import * as authService from '../../services/authServices';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    // request to server - after success
    useEffect(() => {
        authService.logout()
        .then(() => {
            logoutHandler();
            navigate(Path.Home);
        })
        .catch(() => navigate(Path.Home))
    }, []);

    return null;
}