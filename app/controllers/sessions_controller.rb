class SessionsController < ApplicationController
  # skip_before_action :authenticate_user, only: [:create]
  # require "securerandom"

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      set_remember_token(user)
      render json: user, status: :ok
    else
      render json: {
               error: "Invalid Credentials. Try again!"
             },
             status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    delete_remember_token
  end

  private

  def set_remember_token(user)
    cookies[:remember_token] = {
      value: SecureRandom.base64(16),
      expires: Time.now + 1_209_600
    }
    user.remember_token = cookies[:remember_token]
    user.save!
  end

  def delete_remember_token(user)
    cookies.delete(:remember_token)
    user.remember_token = nil 
    user.save!
  end
end
