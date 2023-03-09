import Team from '../models/teamsModel.js';
import User from '../models/userModel.js';

export const createTeam = async(req, res) => {

        const {name, quantity, players } = req.body;

        const existingTeam = await Team.findOne({name})
        if(existingTeam){
            res.status(401).json({message: 'Équipe déjà existante'});
        }

        const existingPlayers = await User.find({ _id: { $in: players } });
        if (existingPlayers.length !== players.length) {
            return res.status(400).json({ message: "Au moins un des joueurs n'existe pas." });
        }
        const newTeam = new Team({
            name,
            quantity,
            players: existingPlayers.map((player) => player._id),
        });
        try {
            await newTeam.save();
                res.status(201).json(newTeam);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
 };


