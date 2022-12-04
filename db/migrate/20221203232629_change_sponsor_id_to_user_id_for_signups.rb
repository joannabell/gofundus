class ChangeSponsorIdToUserIdForSignups < ActiveRecord::Migration[7.0]
  def change
    rename_column :signups, :sponsor_id, :user_id 
  end
end
