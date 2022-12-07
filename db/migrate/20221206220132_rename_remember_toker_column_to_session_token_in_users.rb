class RenameRememberTokerColumnToSessionTokenInUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :remember_token, :session_token
  end
end
