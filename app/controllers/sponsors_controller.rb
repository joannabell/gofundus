class SponsorsController < ApplicationController
  before_action :authorize
  before_action :authenticate_user

  def index
    user = User.find(session[:user_id])
    userSponsorships = user.sponsorships
    render json: userSponsorships, status: :ok
  end

  def show
    sponsorship =
      Sponsorship.where(user_id: session[:user_id]).find(params[:id])
    render json: sponsorship, status: :ok
  end

  def create
    sponsor = Sponsor.create!(sponsor_params)
    render json: sponsor, status: :created
  end

  def update
    sponsor = Sponsor.find(params[:id])
    sponsor.update!(sponsor_params)
    render json: sponsor, status: :accepted
  end

  def destroy
    sponsor = Sponsor.find(params[:id])
    sponsor.destroy
    render json: {}, status: :ok
  end

  private

  def authorize
    unless session.include? :user_id
      return render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def current_user
    User.find_by_id(session[:user_id])
  end

  def authenticate_user
    render json: "Not authorized", status: :unauthorized unless current_user
  end

  def sponsor_params
    params.permit(:name, :email)
  end
end
