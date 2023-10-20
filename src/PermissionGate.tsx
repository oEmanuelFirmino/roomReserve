import React, { ReactNode } from "react";

const useGetUserPermissions = () => {
  // Lógica para obter as permissões do usuário
  return ["canEdit"];
};

interface PermissionGateProps {
  permissions: string[];
  user: {
    permissions: string[];
  };
  children: ReactNode;
}

const PermissionGate: React.FC<PermissionGateProps> = ({
  children,
  permissions,
  user,
}) => {
  const userPermissions = user.permissions;

  if (
    permissions.some((permission) => {
      return userPermissions.includes(permission);
    })
  ) {
    return <>{children}</>;
  }

  return null;
};

export default PermissionGate;
