class Signup < ApplicationRecord
    validates :user, :sponsorship, presence: :true

    belongs_to :user 
    belongs_to :sponsorship 
end
