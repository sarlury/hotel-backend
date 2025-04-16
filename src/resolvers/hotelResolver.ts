import { Hotel } from '../entities/Hotel';
import { AppDataSource } from '../data-source';

const hotelRepository = AppDataSource.getRepository(Hotel);

export const resolvers = {
  Query: {
    getHotels: async () => {
      return await hotelRepository.find({ where: { deleted: false } });
    },
  },
  Mutation: {
    addHotel: async (_: any, args: any) => {
      const hotel = hotelRepository.create({ ...args });
      return await hotelRepository.save(hotel);
    },

    updateHotel: async (_: any, args: any) => {
      const hotel = await hotelRepository.findOneBy({ id: Number(args.id) });
      if (!hotel) throw new Error('Hotel not found');
      Object.assign(hotel, args);
      return await hotelRepository.save(hotel);
    },

    softDeleteHotel: async (_: any, { id }: { id: number }) => {
      const hotel = await hotelRepository.findOneBy({ id });
      if (!hotel) return false;
      hotel.deleted = true;
      await hotelRepository.save(hotel);
      return true;
    },
  },
};
