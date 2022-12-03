class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :password_confirmation

  has_many :sponsorships
end
