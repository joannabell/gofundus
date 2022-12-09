class UsersController < ApplicationController
  #   skip_before_action :authenticate_user, only: [:create, :show]

  def index
    users = User.all
    render json: users, each_serializer: UserSerializer
  end

  def show
    user = User.find(params[:id])

    if user
      render json: user
    else
      render json: { error: "User not found" }, status: 404
    end
  end

  def me
    if current_user
      render json: current_user, status: :ok
    else
      render json: "Not authenticated", status: :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      head :no_content
    else
      render json: "User does not exist", status: :not_found
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end
