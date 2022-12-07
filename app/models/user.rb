class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  # validates :password, presence: true, uniqueness: true
  # validates :password, length: { in: 6..20 }


  has_many :signups
  has_many :sponsorships, through: :signups, dependent: :destroy

  def self.to_session_json(user)
    { id: user.id, email: user.email, name: user.name }.to_json
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
