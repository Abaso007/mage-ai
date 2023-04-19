class AssociatedUserPresenter():
    def user(self, **kwargs):
        if user := self.resource.user:
            return {
                'avatar': user.avatar,
                'first_name': user.first_name,
                'id': user.id,
                'last_name': user.last_name,
                'owner': user.owner,
                'roles': user.roles,
                'roles_display': user.roles_display,
                'username': user.username,
            }
        else:
            return None
