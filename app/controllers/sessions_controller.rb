class SessionsController < ApplicationController
  # skip_before_action :authenticate_user, only: [:create]


  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id 
      render json: user, status: :ok
    else 
      render json: { error: "Invalid Credentials. Try again!" }, status: :unauthorized 
    end
  end

  def destroy
    session.delete :user_id
  end
  
end